import { useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext.jsx'
import { links } from '../data/links.js'
import { Icon } from './Icon.jsx'

export default function Contact() {
  const { t, lang } = useLanguage()
  const subjectOpts = t('contact.form.subjectOptions') || []

  const [form, setForm] = useState({
    name: '',
    email: '',
    organisation: '',
    subject: '',
    message: '',
  })

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const onSubmit = (e) => {
    e.preventDefault()
    const lines = [
      form.name && `${lang === 'pt' ? 'Nome' : 'Name'}: ${form.name}`,
      form.organisation && `${lang === 'pt' ? 'Organização' : 'Organisation'}: ${form.organisation}`,
      form.email && `${lang === 'pt' ? 'Email' : 'Email'}: ${form.email}`,
      '',
      form.message,
    ]
      .filter(Boolean)
      .join('\n')
    const subj = form.subject || (lang === 'pt' ? 'Contacto via website' : 'Website contact')
    const body = encodeURIComponent(lines)
    window.location.href = `mailto:${links.personal.email}?subject=${encodeURIComponent(subj)}&body=${body}`
  }

  const socialGroups = [
    {
      titleKey: 'contact.socialPersonal',
      links: [
        { type: 'mail', href: `mailto:${links.personal.email}`, label: links.personal.email },
        { type: 'linkedin', href: links.personal.linkedin, label: 'LinkedIn' },
        { type: 'instagram', href: links.personal.instagram, label: '@helderlucheses' },
      ],
    },
    {
      titleKey: 'contact.socialPC',
      links: [
        { type: 'globe', href: links.planetaConsciente.website, label: 'planetaconsciente.org' },
        { type: 'instagram', href: links.planetaConsciente.instagram, label: '@planeta_consciente.ao' },
        { type: 'linkedin', href: links.planetaConsciente.linkedin, label: 'LinkedIn' },
        { type: 'youtube', href: links.planetaConsciente.youtube, label: 'YouTube' },
        { type: 'tiktok', href: links.planetaConsciente.tiktok, label: 'TikTok' },
        { type: 'facebook', href: links.planetaConsciente.facebook, label: 'Facebook' },
      ],
    },
    {
      titleKey: 'contact.socialMPLA',
      links: [
        { type: 'instagram', href: links.cap412.instagram, label: '@mpla412' },
        { type: 'facebook', href: links.cap412.facebook, label: 'Facebook' },
      ],
    },
    {
      titleKey: 'contact.socialNervi',
      links: [
        { type: 'globe', href: links.nervi.website, label: 'nervi.ao' },
        { type: 'mail', href: `mailto:${links.nervi.email}`, label: links.nervi.email },
        { type: 'instagram', href: links.nervi.instagram, label: '@nervi.ao' },
        { type: 'tiktok', href: links.nervi.tiktok, label: 'TikTok' },
        { type: 'youtube', href: links.nervi.youtube, label: 'YouTube' },
      ],
    },
    {
      titleKey: 'contact.socialRotary',
      links: [
        { type: 'twitter', href: links.rotary.twitter, label: '@RotaryLuanda' },
        { type: 'globe', href: links.rotary.profile, label: 'Rotary profile' },
      ],
    },
    {
      titleKey: 'contact.socialShapers',
      links: [
        { type: 'instagram', href: links.shapers.instagram, label: '@luandashapers' },
        { type: 'globe', href: links.shapers.weforum, label: 'World Economic Forum' },
      ],
    },
  ]

  return (
    <section id="contact" className="relative bg-cream-light py-24 md:py-32">
      <div className="container-wide">
        {/* Header */}
        <div className="reveal-on-scroll grid lg:grid-cols-12 gap-8 lg:gap-16 mb-16">
          <div className="lg:col-span-4">
            <div className="flex items-baseline gap-4 mb-4">
              <span className="section-number">{t('contact.number')}</span>
              <span className="gold-rule w-10" />
              <span className="section-label text-ink/60">{t('contact.label')}</span>
            </div>
          </div>
          <div className="lg:col-span-8">
            <h2 className="section-title text-ink text-balance mb-6">
              {t('contact.title')}
            </h2>
            <p className="text-ink/70 text-lg leading-relaxed max-w-2xl">
              {t('contact.intro')}
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Form */}
          <div className="lg:col-span-7 reveal-on-scroll">
            <div className="bg-ink p-8 md:p-10 lg:p-12 relative">
              {/* Corner brackets */}
              <span className="absolute top-3 left-3 w-5 h-5 border-t border-l border-gold" />
              <span className="absolute bottom-3 right-3 w-5 h-5 border-b border-r border-gold" />

              <div className="mb-8">
                <p className="text-[10px] uppercase tracking-ultra text-gold mb-2">
                  {lang === 'pt' ? 'Mensagem directa' : 'Direct message'}
                </p>
                <p className="font-display text-2xl md:text-3xl text-cream-light font-light leading-tight">
                  {lang === 'pt'
                    ? 'Escreva-me. Respondo pessoalmente.'
                    : 'Write to me. I respond personally.'}
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <Field
                  name="name"
                  value={form.name}
                  onChange={onChange}
                  label={t('contact.form.name')}
                  required
                />
                <Field
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={onChange}
                  label={t('contact.form.email')}
                  required
                />
              </div>

              <div className="mt-5">
                <Field
                  name="organisation"
                  value={form.organisation}
                  onChange={onChange}
                  label={t('contact.form.organisation')}
                />
              </div>

              <div className="mt-5">
                <label className="block text-[10px] uppercase tracking-ultra text-cream-light/55 mb-2">
                  {t('contact.form.subject').replace ? t('contact.form.subject') : 'Subject'}
                </label>
                <select
                  name="subject"
                  value={form.subject}
                  onChange={onChange}
                  className="w-full bg-transparent border-b border-cream-light/30 focus:border-gold text-cream-light py-2.5 outline-none transition-colors text-sm"
                >
                  {Array.isArray(subjectOpts) &&
                    subjectOpts.map((opt, i) => (
                      <option
                        key={i}
                        value={i === 0 ? '' : opt}
                        className="bg-ink text-cream-light"
                      >
                        {opt}
                      </option>
                    ))}
                </select>
              </div>

              <div className="mt-5">
                <label className="block text-[10px] uppercase tracking-ultra text-cream-light/55 mb-2">
                  {t('contact.form.message')}
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={onChange}
                  rows={5}
                  required
                  className="w-full bg-transparent border border-cream-light/20 focus:border-gold text-cream-light p-3 outline-none transition-colors text-sm resize-none"
                />
              </div>

              <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <p className="text-[10px] uppercase tracking-widest text-cream-light/45">
                  {t('contact.form.note')}
                </p>
                <button
                  onClick={onSubmit}
                  className="inline-flex items-center justify-center gap-3 px-7 py-3.5 bg-oxblood hover:bg-oxblood-light text-cream-light text-xs uppercase tracking-widest font-medium transition-colors border border-oxblood hover:border-gold/40"
                >
                  {t('contact.form.submit')}
                  <Icon.ArrowRight width="14" height="14" />
                </button>
              </div>
            </div>

            {/* Direct email */}
            <div className="mt-6 flex items-center gap-4 p-5 bg-cream border border-ink/10">
              <Icon.Mail className="text-oxblood" width="20" height="20" />
              <div>
                <p className="text-[10px] uppercase tracking-ultra text-ink/55">
                  {t('contact.directEmailLabel')}
                </p>
                <a
                  href={`mailto:${links.personal.email}`}
                  className="font-display text-base md:text-lg text-ink hover:text-oxblood transition-colors"
                >
                  {links.personal.email}
                </a>
              </div>
            </div>
          </div>

          {/* Socials grouped */}
          <div className="lg:col-span-5 reveal-on-scroll" style={{ transitionDelay: '120ms' }}>
            <div className="space-y-6">
              {socialGroups.map((group) => (
                <div
                  key={group.titleKey}
                  className="bg-cream-light border border-ink/10 hover:border-oxblood/40 transition-colors p-6"
                >
                  <p className="text-[10px] uppercase tracking-ultra text-oxblood mb-4">
                    {t(group.titleKey)}
                  </p>
                  <ul className="space-y-2">
                    {group.links.map((l) => (
                      <li key={l.href}>
                        <a
                          href={l.href}
                          target={l.type === 'mail' ? undefined : '_blank'}
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 text-ink/80 hover:text-oxblood transition-colors text-sm py-1 group"
                        >
                          <span className="text-ink/40 group-hover:text-oxblood transition-colors">
                            <SocialGlyph type={l.type} />
                          </span>
                          <span className="link-underline">{l.label}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Field({ name, type = 'text', value, onChange, label, required }) {
  return (
    <div>
      <label className="block text-[10px] uppercase tracking-ultra text-cream-light/55 mb-2">
        {label}
        {required && <span className="text-gold ml-1">*</span>}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full bg-transparent border-b border-cream-light/30 focus:border-gold text-cream-light py-2.5 outline-none transition-colors text-sm"
      />
    </div>
  )
}

function SocialGlyph({ type }) {
  const map = {
    mail: Icon.Mail,
    globe: Icon.Globe,
    instagram: Icon.Instagram,
    linkedin: Icon.LinkedIn,
    facebook: Icon.Facebook,
    twitter: Icon.Twitter,
    youtube: Icon.YouTube,
    tiktok: Icon.TikTok,
  }
  const C = map[type]
  return C ? <C width="14" height="14" /> : null
}
