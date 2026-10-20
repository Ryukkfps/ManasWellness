'use client';

import { useState, useEffect } from 'react';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { THEME_PRESETS, FONT_PAIRS } from '@/lib/theme-presets';

export default function AdminAppearance() {
  const [themePreset, setThemePreset] = useState(THEME_PRESETS[0].key);
  const [fontPair, setFontPair] = useState(FONT_PAIRS[0].key);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    fetch('/api/settings')
      .then((r) => r.json())
      .then((data) => {
        if (data?.themePreset) setThemePreset(data.themePreset);
        if (data?.fontPair) setFontPair(data.fontPair);
      })
      .finally(() => setLoading(false));
  }, []);

  const handleSave = async () => {
    setSaving(true);
    setSaved(false);
    try {
      const response = await fetch('/api/settings', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ themePreset, fontPair }),
      });
      if (response.ok) setSaved(true);
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="p-8 flex items-center justify-center">
        <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-sage-700" />
      </div>
    );
  }

  return (
    <div className="p-6 md:p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-serif text-2xl text-ink mb-1">Appearance</h1>
        <p className="text-sm text-ink-muted mb-8">
          Choose the color theme and fonts for the whole site. Changes apply immediately, site-wide — no rebuild needed.
        </p>

        {saved && (
          <div className="bg-sage-100 text-sage-700 px-4 py-3 rounded-xl text-sm mb-6">Saved — refresh any open page to see it.</div>
        )}

        <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgba(43,47,44,0.06)] p-6 mb-6">
          <h2 className="font-serif text-lg text-ink mb-1">Color Theme</h2>
          <p className="text-sm text-ink-muted mb-5">Pick a palette. The banner/hero image is managed separately under Content and Carousel.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {THEME_PRESETS.map((preset) => {
              const active = preset.key === themePreset;
              return (
                <button
                  key={preset.key}
                  type="button"
                  onClick={() => setThemePreset(preset.key)}
                  className={`text-left rounded-xl border-2 p-4 transition-colors ${
                    active ? 'border-sage-700' : 'border-line hover:border-sage-500'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex gap-1.5">
                      {[preset.tokens.sage700, preset.tokens.clay, preset.tokens.cream, preset.tokens.sand].map((hex, i) => (
                        <span key={i} className="w-6 h-6 rounded-full border border-black/5" style={{ backgroundColor: hex }} />
                      ))}
                    </div>
                    {active && <Check className="w-5 h-5 text-sage-700" />}
                  </div>
                  <div className="font-medium text-ink">{preset.label}</div>
                  <div className="text-xs text-ink-muted mt-1">{preset.description}</div>
                </button>
              );
            })}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgba(43,47,44,0.06)] p-6 mb-6">
          <h2 className="font-serif text-lg text-ink mb-1">Fonts</h2>
          <p className="text-sm text-ink-muted mb-5">Pick a heading + body font pairing.</p>
          <div className="flex flex-col gap-2">
            {FONT_PAIRS.map((pair) => {
              const active = pair.key === fontPair;
              return (
                <button
                  key={pair.key}
                  type="button"
                  onClick={() => setFontPair(pair.key)}
                  className={`flex items-center justify-between text-left rounded-xl border-2 px-4 py-3 transition-colors ${
                    active ? 'border-sage-700 bg-sage-100' : 'border-line hover:border-sage-500'
                  }`}
                >
                  <span className="font-medium text-ink">{pair.label}</span>
                  {active && <Check className="w-5 h-5 text-sage-700 shrink-0" />}
                </button>
              );
            })}
          </div>
        </div>

        <Button onClick={handleSave} disabled={saving}>
          {saving ? 'Saving...' : 'Save Appearance'}
        </Button>
      </div>
    </div>
  );
}
