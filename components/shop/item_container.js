import styles from './shop.module.scss';
import {useState} from 'react';
import Item from './items';

export default function ItemContainer({categories}) { 
    const [sections, setSections] = useState(categories);

    return (
        <div className={styles.homepage}>
            <div className={styles.menuContainer_menu}>
                {categories.map(({name, remote_url, imageUrl, cid, price})=>(
                    <Item key={cid} name={name} remote_url={remote_url} imageUrl={imageUrl} price={price} />
                ))}
            </div>
        </div>
    )
}
