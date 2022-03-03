import PropTypes from 'prop-types';

import GridItem from '../Item';

import GridContainer from './styled';

import { Movie } from '../../types';

function Grid(props: GridProps) {
  const { items } = props;

  return (
    <GridContainer>
      {items.map((item: Movie) => {

        return (
          <GridItem
            key={item.imdbID}
            title={item.Title}
            image={item.Poster}
            overview={item.Type}
          />
        );
      })}
    </GridContainer>
  );
}

Grid.propTypes = {
  items: PropTypes.arrayOf(PropTypes.any)
};

Grid.defaultProps = {
  items: []
};

type GridProps = {
  items: Movie[]
}

export default Grid;

