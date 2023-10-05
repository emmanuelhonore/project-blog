import dynamic from 'next/dynamic';

const DivisionGroupsDemo = dynamic(() =>
  import('./DivisionGroupsDemo'), { fallback: '<p>loading</p>' }
);

export default DivisionGroupsDemo;
