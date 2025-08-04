import { Card, CardHeader, CardBody } from "@heroui/react";

export interface NewsCardProps {
  title: string;
  content: string;
  publishedAt: string;
  author?: string[] | string;
}

export default function NewsCard({
  title,
  content,
  publishedAt,
  author,
}: NewsCardProps) {
  return (
    <Card className="py-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">{title}</p>
        <small className="text-default-500">
          Author: {Array.isArray(author) ? author.join(", ") : author}
        </small>
        <h4 className="font-bold text-large">{publishedAt}</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <p className="text-default-500 line-clamp-3">Description: {content}</p>
      </CardBody>
    </Card>
  );
}
