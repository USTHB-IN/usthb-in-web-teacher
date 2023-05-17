interface Props {
  title: string;
  description: string;
}

export default function AnnouncementDetail(announcement: Props) {
  return (
    <div className="flex flex-row gap-4">
      <div className="rounded-sm bg-[#FFD19D] w-4 h-full"></div>
      <div className="flex flex-col justify-between ">
        <p className="font-semibold">{announcement.title}</p>
        <p className="text-sm">{announcement.description}</p>
      </div>
    </div>
  );
}
