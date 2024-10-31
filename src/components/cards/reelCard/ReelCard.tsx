interface ReelCardProps {
    imageUrl: string;
    title: string;
    onClick: () => void
}

const ReelCard: React.FC<ReelCardProps> = ({ imageUrl, title, onClick }) => {
    return (
        <div className="w-[126px] h-[187px] shadow-[0_0_4px_1px_rgba(0,0,0,0.1),0_0_1px_0_rgba(0,0,0,0.5)] rounded-[12px] relative"
             style={{ backgroundImage: `url(${imageUrl})`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
            <div className="h-[40%] w-full absolute bottom-0 rounded-b-[12px]" style={{ background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1))' }}>
                <p className="text-left text-neutral-white text-small px-[12px] h-[30px] line-clamp-2 absolute bottom-3">
                    {title}</p>
            </div>
        </div>
    );
};

export default ReelCard;