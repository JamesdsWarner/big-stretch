import { useNavigate } from 'react-router-dom';

import {
    DirectoryItemContainer, 
    BackgroundImage, 
    Body, 
    Title, 
    ShopNow 
} from './directory-item.styles'

const DirectoryItem = ({ category }) => {
    const { imageUrl, title, route } = category;

    const navigate = useNavigate();

    const onNavigateHandler = () => navigate(route)
    return (
        <DirectoryItemContainer onClick={onNavigateHandler}>
            <BackgroundImage className='background-image' imageUrl={imageUrl} />
            <Body>
                <Title>{title}</Title>
                <ShopNow>Shop Now</ShopNow>
            </Body>
        </DirectoryItemContainer>
    )

}

export default DirectoryItem;