import { SearchOrderPipe } from "./search-order.pipe";


describe('order filter',()=>{
let items;

beforeEach(()=>{
items=[
{id:1,customerName:"mehul",shipper:"john",address:"navkarBunglows",city:"jam", orderDate:"20-20-2020",orderTotal:10},
{id:2,customerName:"mehul",shipper:"john",address:"navkarBunglows",city:"jam", orderDate:"20-20-2020",orderTotal:10}
]
})
it('filter pipe should check the transform ',()=>{
let pipe = new SearchOrderPipe();
pipe.transform(items,"mehul")
expect(pipe.transform(items,"mehul")).toContain(items[0],items[0].customerName)
})

it("filter pipe should return all items if no field is given", () => {
let pipe = new SearchOrderPipe();
let items = [];
let filtered = pipe.transform(items, null);
expect(filtered).toEqual(items);
});

it("filter pipe should filter",()=>{
let pipe = new SearchOrderPipe();
let filtered = pipe.transform(items,"mehul");
expect(filtered.length).toBe(2);
})
});//order filter pipe