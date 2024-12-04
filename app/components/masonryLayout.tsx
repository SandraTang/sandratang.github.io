import Card from "./card";
import { cardInfo } from "./cardInfo";

export default function MasonryLayout() {
  return (
    <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4">
      {cardInfo.map((card) => (
        <Card key={card.title} {...card} />
      ))}
    </div>
  );
}
