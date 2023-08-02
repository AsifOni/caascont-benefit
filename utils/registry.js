// Custom Imports
import { Card as CaascontCard } from '../components/Card';
import { Hero as CaascontHero } from '../components/Hero';
import { Button as CaascontButton } from '../components/Button';
import { ThreeColumnCard } from '../components/ThreeColumnCard';
import { TwoColumnSection } from '../components/TwoColumnSection';

export function ComponentRegistry() {
  return {
    button: CaascontButton,
    hero: CaascontHero,
    card: CaascontCard,
    threeColumnCardSection: ThreeColumnCard,
    twoColumnSection: TwoColumnSection,
  };
}
