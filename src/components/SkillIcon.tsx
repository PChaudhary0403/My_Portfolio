import * as Icons from 'lucide-react';

interface SkillIconProps {
  name: string;
  className?: string;
  size?: number;
}

export default function SkillIcon({ name, className, size }: SkillIconProps) {
  // Map some custom name matches if needed, otherwise grab from Lucide export
  const LucideIcon = (Icons as any)[name];
  
  if (!LucideIcon) {
    // Return a default icon if not found
    return <Icons.Code className={className} size={size} />;
  }
  
  return <LucideIcon className={className} size={size} />;
}
