import {Card, CardHeader, CardBody, Image} from "@heroui/react";

export interface NewsCardProps {
  title: string;
  description: string;
  pubDate?: string;
  author?: string[] | string;
}

export default function NewsCard({ title, description, pubDate, author }: NewsCardProps) {
  return (
    <Card className="py-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">{title}</p>
        <small className="text-default-500">{Array.isArray(author) ? author.join(", ") : author}</small>
        <h4 className="font-bold text-large">{pubDate}</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
       
      </CardBody>
    </Card>
  );
}
