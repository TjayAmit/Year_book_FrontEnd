import {
  Text,
  Box,
  CardComponent,
  Grid,
  GridItem,
  LineGraph,
} from '../../Packages.js';

const Dashboard = () => {
  return (
    <>
      <Box w={'100%'}>
        <Grid
          templateColumns={[
            'repeat(1, 1fr)',
            'repeat(1, 1fr)',
            'repeat(2, 1fr)',
            'repeat(4, 1fr)',
          ]}
          gap={5}
        >
          <GridItem rowSpan={[1, 1, 2, 2]} colsspan={[1, 1, 2, 2]}>
            <CardComponent />
          </GridItem>
          <GridItem rowSpan={[1, 1, 2, 2]} colsspan={[1, 1, 2, 2]}>
            <CardComponent />
          </GridItem>
          <GridItem rowSpan={[1, 1, 2, 2]} colsspan={[1, 1, 2, 2]}>
            <CardComponent />
          </GridItem>
          <GridItem rowSpan={[1, 1, 2, 2]} colsspan={[1, 1, 2, 2]}>
            <CardComponent />
          </GridItem>
        </Grid>
        <Grid mt={10} templateColumns={['repeat(6, 1fr)']} gap={5}>
          <GridItem colSpan={['6', '6', '6', '4']} w={'100%'}>
            <Box w={'100%'} rounded={6} boxShadow={'lg'}>
              <LineGraph />
            </Box>
          </GridItem>
          <GridItem colSpan={['6', '6', '6', '2']} w={'100%'}>
            <Box w={'100%'} h={'100%'} rounded={6} boxShadow={'lg'}>
              sfdds
            </Box>
          </GridItem>
        </Grid>
      </Box>
    </>
  );
};

export default Dashboard;
