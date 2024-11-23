'use client';

import { createPaste } from '@/app/actions/pastes/create';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { formSchema } from '@/lib/formSchema';
import { log } from '@/lib/logger';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader, Upload } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

function SubmitButton({ loading }: { loading: boolean }) {
  return (
    <Button type="submit" disabled={loading}>
      {loading ? <Loader className="animate-spin" /> : <Upload />} Upload
    </Button>
  );
}

export function PasteForm() {
  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      contents: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    log.info(JSON.stringify(values));

    setLoading(true);
    await createPaste(values.contents);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="contents"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Paste</FormLabel>
              <FormControl>
                <Textarea className="h-56 w-full font-mono" {...field} autoFocus />
              </FormControl>
              <FormDescription>Pastes expire in one hour.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="mt-4 flex justify-end">
          <SubmitButton loading={loading} />
        </div>
      </form>
    </Form>
  );
}
