"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Mail, Copy, Check } from "lucide-react"

export function FeedbackForm() {
    const [message, setMessage] = useState("")
    const [subject, setSubject] = useState("Subject Title")
    const [copied, setCopied] = useState(false)

    const email = "muhajirharon@gmail.com"

    const handleSend = () => {
        const body = encodeURIComponent(message)
        const encodedSubject = encodeURIComponent(subject)
        window.location.href = `mailto:${email}?subject=${encodedSubject}&body=${body}`
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(message)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    return (
        <Card className="w-full max-w-2xl mx-auto border-secondary/20 bg-muted/30">
            <CardHeader className="text-center space-y-2">
                <div className="mx-auto w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-2">
                    <Mail className="w-6 h-6 text-secondary" />
                </div>
                <CardTitle className="text-2xl font-heading uppercase tracking-wide">Get in Touch</CardTitle>
                <CardDescription className="text-muted-foreground font-sans text-lg">
                    Have a project in mind or feedback to share? Write your message below and send it directly to Muhajir.
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
                <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Subject</label>
                    <Input
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        className="font-sans bg-background border-secondary/20 focus-visible:ring-secondary"
                    />
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Your Message</label>
                    <Textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Type your message here..."
                        className="min-h-[150px] font-sans bg-background border-secondary/20 focus-visible:ring-secondary resize-none"
                    />
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                    <Button
                        onClick={handleSend}
                        className="flex-1 h-12 text-lg uppercase tracking-wider font-heading bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-[1.02] transition-all"
                        disabled={!message.trim()}
                    >
                        <Mail className="mr-2 h-5 w-5" />
                        Open in Email App
                    </Button>

                    <Button
                        variant="outline"
                        onClick={handleCopy}
                        className="sm:w-auto h-12 border-secondary/50 text-secondary hover:bg-secondary hover:text-primary-foreground"
                        disabled={!message.trim()}
                    >
                        {copied ? <Check className="h-5 w-5" /> : <Copy className="h-5 w-5" />}
                        <span className="sr-only">Copy message</span>
                    </Button>
                </div>

                <p className="text-xs text-center text-muted-foreground pt-4">
                    This will open your default email client with your message pre-filled.
                    <br />
                    You can also email directly at <span className="font-bold text-secondary">{email}</span>
                </p>
            </CardContent>
        </Card>
    )
}
