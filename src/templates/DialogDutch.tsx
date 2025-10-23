'use client';

import { Loader2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

// eslint-disable-next-line @typescript-eslint/no-redeclare
export default function NameEmailDialogDutch({
  trigger,
  listID,
  tag,
}: {
  trigger: React.ReactNode;
  listID?: string;
  tag?: string;
}) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [website, setWebsite] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [open, setOpen] = useState(false);
  const [error, setError] = useState('');

  const router = useRouter();

  React.useEffect(() => {
    if (success) {
      const timer = setTimeout(() => {
        // Use Next.js native client navigation instead of window.location
        router.push(
          'https://link.apisystem.tech/widget/survey/V7To2TXcfUTDC1WWSHiH',
        );
        setOpen(false);
        setSuccess(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
    return undefined;
  }, [success, router]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          website,
          listID,
          tag,
          language: 'Dutch',
        }),
      });
      if (res.ok) {
        setSuccess(true);
        setName('');
        setEmail('');
        setWebsite('');
      } else {
        const data = await res.json();
        setError(data.error || 'Something went wrong');
      }
    } catch (err) {
      setError('Network error');
    } finally {
      setLoading(false);
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-lg font-semibold text-[#212121]">
            Ontvang Gratis Ebook
          </DialogTitle>
          <DialogDescription>
            Vul je gegevens hieronder in om het ebook te ontvangen.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="grid gap-4 text-[#212121]">
          <div className="grid gap-3">
            <Label htmlFor="name">Naam</Label>
            <Input
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              disabled={loading || success}
            />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="email">E-mailadres</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={loading || success}
            />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="website">Website</Label>
            <Input
              id="website"
              name="website"
              type="url"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
              required
              disabled={loading || success}
            />
          </div>
          <DialogFooter>
            {(() => {
              if (loading) {
                return (
                  <div className="flex items-center gap-2">
                    <Loader2 className="animate-spin" />
                    <span>Verzenden...</span>
                  </div>
                );
              }
              if (success) {
                return (
                  <div className="font-semibold text-green-600">
                    Bedankt! Controleer je e-mail voor het ebook.
                  </div>
                );
              }
              return (
                <>
                  <DialogClose asChild>
                    <Button variant="outline" type="button" disabled={loading}>
                      Annuleren
                    </Button>
                  </DialogClose>
                  <Button type="submit" disabled={loading}>
                    Verzenden
                  </Button>
                </>
              );
            })()}
            {error && <div className="mt-2 text-red-600">{error}</div>}
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
