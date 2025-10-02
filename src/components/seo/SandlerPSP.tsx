
// This component is deprecated. Use ValuePropositionBlock instead.
import Link from "next/link";
import ValuePropositionBlock from "./ValuePropositionBlock";

interface ValuePropositionBlockProps {
  pain: string;
  stakes: string;
  prescription: string;
  proof: string;
  ctaHref?: string;
  ctaText?: string;
}

export default function SandlerPSP(props: ValuePropositionBlockProps) {
  return <ValuePropositionBlock {...props} />;
}
