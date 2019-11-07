import Loadable from 'react-loadable';

const loadable = (filename) => Loadable({
  loader:() => import(`@/pages/${filename}`),
  loading:() => ('')
});


const routers = [
  {
      path:'/page1',
      exact:true,
      component:loadable('page1')
  },
  {
      path:'/view1',
      component:loadable('view1')
  },
  {
      path:'/view2',
      component:loadable('view2')
  },
];

export default routers;
