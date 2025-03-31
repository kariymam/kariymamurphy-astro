export type Link = {
    name: string;
    url: string;
}

type Props = {
    links: Array<Link>;
}

const LinksContainer = ({ links }: Props) => {
    return (
        <div className="flex gap-2">
            <ul>
                {links.map(({ name, url}, i) => (
                    <li>
                        <a key={i} href={url}>
                            {name}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default LinksContainer;