export interface SkillItem {
  name: string
  value: number
}

export interface SkillGroup {
  title: string
  items: [string, number][]
}

export interface Campaign {
  title: string
  raised: number
  goal: number
  donors: number
  days: number
  tag: string
  img: string
}

export interface Certification {
  name: string
  issuer: string
  icon: string
  color: string
}

export interface ContactForm {
  name: string
  email: string
  message: string
}

export interface NavItem {
  id: string
  label: string
}
