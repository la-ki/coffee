import { Box, Button, Grid, Paper, Typography } from '@mui/material';
import { useTranslation } from 'next-i18next';
import { useState } from 'react';
import useDebounce from '../../../hooks/use-debounce';
import useSWRWithFallbackData from '../../../hooks/use-swr-with-initial-data';
import { getData } from '../../../requests/dataRequest';
import { compare } from '../../../utils/helpers/sortHelpers';
import DataCard from '../../cards/data-card/DataCard';
import FilterSortComponent from '../filter-sort/FilterSortComponent';

const PaginationComponent = ({ initialData = {} }) => {
  const [pageIndex, setPageIndex] = useState(1);
  const [filter, setFilter] = useState('');
  const [sort, setSort] = useState('');
  const { t } = useTranslation('pagination');

  const fetcher = (page) => getData(page);
  const { data: paginationData } = useSWRWithFallbackData(pageIndex, fetcher, {
    fallbackData: initialData,
  });

  const debouncedFilter = useDebounce(filter, 500);

  const handleFilterChange = (event) => {
    const filterText = event.target.value;
    setFilter(filterText);
  };

  const handleSortChange = (event) => {
    const sort = event.target.value;
    setSort(sort);
  };

  const dataToDisplay = paginationData?.data
    .filter((item) =>
      item.name.toLowerCase().startsWith(debouncedFilter.toLowerCase())
    )
    .sort((a, b) => compare(a.name, b.name, sort))
    .map((item, index) => (
      // ! DON'T USE index for key, this is for example only
      <Grid item sx={{ p: 2 }} xs={12} sm={6} md={4} lg={3} key={index}>
        <DataCard data={item} t={t} />
      </Grid>
    ));

  return (
    <Paper
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'start',
        py: 2,
        minHeight: 400,
        marginTop: 5,
      }}
      elevation={5}
    >
      <Typography sx={{ my: 4 }} variant="h4" gutterBottom align="center">
        {t('Title')}
      </Typography>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          mx: 2,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          <FilterSortComponent
            sort={sort}
            handleSortChange={handleSortChange}
            filter={filter}
            handleFilterChange={handleFilterChange}
          />
        </Box>
      </Box>
      <Grid container>{dataToDisplay}</Grid>
      <Box
        sx={{
          width: '100%',
          textAlign: 'center',
          marginTop: 3,
        }}
      >
        <Button
          disabled={pageIndex === 1}
          onClick={() => setPageIndex(pageIndex - 1)}
          sx={{
            marginRight: 5,
          }}
        >
          {t('Btns.PrevBtn')}
        </Button>
        <Button
          disabled={pageIndex * 4 > paginationData?.dataCount}
          onClick={() => setPageIndex(pageIndex + 1)}
          sx={{
            marginRight: 5,
          }}
        >
          {t('Btns.NextBtn')}
        </Button>
      </Box>
    </Paper>
  );
};

export default PaginationComponent;
