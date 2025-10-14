'use client';

import { Loader2 } from 'lucide-react';
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
export default function NameEmailDialog({
  trigger,
}: {
  trigger: React.ReactNode;
}) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [open, setOpen] = useState(false);
  const [error, setError] = useState('');

  React.useEffect(() => {
    if (success) {
      const timer = setTimeout(() => {
        setOpen(false);
        setSuccess(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
    return undefined;
  }, [success]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email }),
      });
      if (res.ok) {
        setSuccess(true);
        setName('');
        setEmail('');
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
            Get Free Ebook
          </DialogTitle>
          <DialogDescription>
            Enter your details below to receive the ebook.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="grid gap-4">
          <div className="grid gap-3">
            <Label htmlFor="name">Name</Label>
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
            <Label htmlFor="email">Email</Label>
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
          <DialogFooter>
            {(() => {
              if (loading) {
                return (
                  <div className="flex items-center gap-2">
                    <Loader2 className="animate-spin" />
                    <span>Submitting...</span>
                  </div>
                );
              }
              if (success) {
                return (
                  <div className="font-semibold text-green-600">
                    Thank you! Check your email for the ebook.
                  </div>
                );
              }
              return (
                <>
                  <DialogClose asChild>
                    <Button variant="outline" type="button" disabled={loading}>
                      Cancel
                    </Button>
                  </DialogClose>
                  <Button type="submit" disabled={loading}>
                    Submit
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
