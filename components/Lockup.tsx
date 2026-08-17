import Image from "next/image";

import { business } from "@/content/site";
import { brand } from "@/images";

type Props = {
  className?: string;
  /** Set on the nav's copy, which is above the fold. */
  priority?: boolean;
  /**
   * Empty where a wrapping link or heading already names the business, so the
   * same name is not read out twice.
   */
  alt?: string;
};

/**
 * Scott's stacked lockup: the bird, PHOENIX, and "Detailing Cardiff" in his own
 * script. Cut by `tools/build-brand.py` with its black ground keyed out, so it
 * sits on the bar, on a show plate and on the footer's ink without a tile.
 *
 * Every logo on the page comes through here. The three of them are the same
 * file at three sizes, which is the point: the mark should not be one thing in
 * the corner and something else at the foot of the page. Callers size it by
 * height, because the artwork's proportion should follow the space it lands in.
 */
export function Lockup({ className, priority, alt = business.fullName }: Props) {
  return <Image src={brand.logoLockup} alt={alt} className={className} priority={priority} />;
}
