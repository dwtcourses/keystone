/** @jsx jsx */

import { jsx } from '@emotion/core';

import { Container, H2 } from '../primitives';
import EventItems from '../components/EventItems';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Meta from '../components/Meta';
import { gridSize } from '../theme';

import { GET_ALL_EVENTS } from '../graphql/events';
import { initApolloClient } from '../lib/apollo';

export default function Events({ allEvents }) {
  return (
    <>
      <Meta title="Events" />
      <Navbar background="white" />
      <Container css={{ marginTop: gridSize * 3 }}>
        <H2>Events</H2>
        <EventItems events={allEvents} />
      </Container>
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const apolloClient = initApolloClient();
  const { data } = await apolloClient.query({ query: GET_ALL_EVENTS });

  return { props: { allEvents: data.allEvents } };
}
