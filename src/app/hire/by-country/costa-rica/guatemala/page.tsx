import { permanentRedirect } from 'next/navigation'

export default function RedirectPage() {
    permanentRedirect('/hire/by-country/guatemala')
}
