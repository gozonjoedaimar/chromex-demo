export default function downline(id, list) {
  
  let res = [];
  let check = list;
  let line = check.filter( item => item.id === id );

  if (Array.isArray(id) && id.length > 0) {
    res = id;
    check = id[id.length-1];
    if (check.length > 0) {
      line = [];
      check.map(item => {
        let filter = list.filter( s_line => s_line.sponsor_id === item.id );
        line = line.concat(filter);
      })
    }
  }

  if (line.length < 1) return res;

  res.push(line);

  res = downline(res, list);

  let order = [];

  if (Array.isArray(res) && res.length > 0) {
    res.map( items => { order = order.concat(items) } );
    return order;
  }
}