"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Send, Loader2 } from "lucide-react"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
          <Send className="h-8 w-8 text-green-600" />
        </div>
        <h3 className="text-xl font-semibold text-foreground mb-2">Wiadomość wysłana!</h3>
        <p className="text-muted-foreground mb-6">
          Dziękujemy za kontakt. Odpowiemy na Twoje zapytanie w ciągu 24 godzin.
        </p>
        <Button variant="outline" onClick={() => setIsSubmitted(false)}>
          Wyślij kolejną wiadomość
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="name">Imię i nazwisko *</Label>
          <Input id="name" placeholder="Jan Kowalski" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="company">Firma</Label>
          <Input id="company" placeholder="Nazwa firmy" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="email">E-mail *</Label>
          <Input id="email" type="email" placeholder="jan@firma.pl" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Telefon</Label>
          <Input id="phone" type="tel" placeholder="+48 123 456 789" />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="subject">Temat *</Label>
        <Select required>
          <SelectTrigger>
            <SelectValue placeholder="Wybierz temat" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="quote">Zapytanie o wycenę</SelectItem>
            <SelectItem value="order">Pytanie o zamówienie</SelectItem>
            <SelectItem value="product">Pytanie o produkt</SelectItem>
            <SelectItem value="complaint">Reklamacja</SelectItem>
            <SelectItem value="cooperation">Współpraca</SelectItem>
            <SelectItem value="other">Inne</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Wiadomość *</Label>
        <Textarea
          id="message"
          placeholder="Opisz szczegółowo swoje zapytanie..."
          rows={5}
          required
          className="resize-none"
        />
      </div>

      <div className="flex items-start gap-2">
        <Checkbox id="consent" required />
        <Label htmlFor="consent" className="text-sm text-muted-foreground leading-relaxed cursor-pointer">
          Wyrażam zgodę na przetwarzanie moich danych osobowych w celu obsługi zapytania. *
        </Label>
      </div>

      <Button type="submit" size="lg" disabled={isSubmitting} className="w-full sm:w-auto">
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            Wysyłanie...
          </>
        ) : (
          <>
            <Send className="mr-2 h-5 w-5" />
            Wyślij wiadomość
          </>
        )}
      </Button>
    </form>
  )
}
