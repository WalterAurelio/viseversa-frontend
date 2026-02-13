export default function BrandLogo({ name } : { name: string }) {
    return (
        <p className="font-Serif font-bold text-[68px] lg:text-[100px]">{name}</p>
    );
}