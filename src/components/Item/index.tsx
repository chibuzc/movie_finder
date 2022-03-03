import PropTypes from 'prop-types';

import {
  Container,
  Content,
  Image,
  Text
} from './styled';

function Item(props: ItemsProps) {
  const { image, title, overview } = props
  return (
    <Container>
      <Image image={image === 'N/A' ? 'https://picsum.photos/200/300' : image} />
      <Content>
        <Text weight='bolder' relative>
          {title}
        </Text>
        <Text color='#BFC0CE' height>
          {overview}
        </Text>
      </Content>
    </Container>
  );
}

Item.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  overview: PropTypes.string,
  ratings: PropTypes.string
};

Item.defaultProps = {
  image: '',
  title: '',
  overview: '',
  ratings: ''
};

type ItemsProps = {
  image: string, title: string, overview: string,
}

export default Item;
