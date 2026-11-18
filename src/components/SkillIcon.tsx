import React from 'react';
import * as Icons from 'lucide-react';

interface SkillIconProps {
  name: string;
  className?: string;
  size?: number;
}

export default function SkillIcon({ name, className, size }: SkillIconProps) {
  // Map some custom name matches if needed, otherwise grab from Lucide export
  const iconMap = Icons as unknown as Record<string, React.ComponentType<{ className?: string; size?: number }>>;
  const LucideIcon = iconMap[name];
  
  if (!LucideIcon) {
    // Return a default icon if not found
    return <Icons.Code className={className} size={size} />;
  }
  
  return <LucideIcon className={className} size={size} />;
}
