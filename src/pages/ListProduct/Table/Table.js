import React, { useState } from "react";
import { Table, Button ,Modal} from "antd";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { delProduct } from "src/redux/form/action";
import { ExclamationCircleOutlined } from '@ant-design/icons';
const columns = [
  {
    title: "Tên sản phẩm",
    dataIndex: "name",
  },
  {
    title: "Giá",
    dataIndex: "price",
  },
  {
    title: "Mô tả",
    dataIndex: "detail",
  },
  {
    title: "",
    dataIndex: "edit",
  },
  {
    title: "",
    dataIndex: "delete",
  },
];
const { confirm } = Modal;

const ListProduct = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const productList = useSelector((state) => state.listProduct);
  console.log(productList)
  const data = productList.map((item,index)=>{
      return(
          {
              key:index,
              id:item.id,
              name:item.name,
              price:item.price,
              detail:item.about,
              edit: 
              <Button onClick={()=>{
                history.push(`/product/${item.id}`)
              }}> Edit </Button>,
              delete: 
              (<Button
                onClick = {()=>showConfirm(item)}
              > Delete </Button>)
          }
      )
  });
  function showConfirm(item) {
    confirm({
      title: 'Bạn chắc chắc muốn xoá?',
      icon: <ExclamationCircleOutlined />,
      content: 'Some descriptions',
      onOk() {
        dispatch(delProduct(item.id))
      },
    });
  }
  return (
    <div>
      <Button onClick={() => history.push("/product/add")} type="primary">
        {" "}
        Thêm sản phẩm
      </Button>
      <Table columns={columns} dataSource={data} />
    </div>
  );
};

export default ListProduct;
