import React, {useEffect, useState} from "react";
import "./index.scss";
// eslint-disable-next-line no-duplicate-imports
// import type {MenuProps} from "antd";
import {Menu} from "antd";
import ApiBook from "@app/api/ApiBook";
import {categorys} from "@app/redux/slices/categorySlice";
import {BlockOutlined} from "@ant-design/icons";
import {useRouter} from "next/router";
import {useDispatch} from "react-redux";

type MenuItem = Required<any>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

export default function Sidebar(): JSX.Element {
  const router = useRouter();
  const dispatch = useDispatch();
  const [category, setCategory] = useState<any>([]);
  let key;
  let sub;
  if (router.query.kind) {
    key = router.query.type as string;
    sub = router.query.kind as string;
  } else {
    const searchParams = new URLSearchParams(window.location.search);
    sub = Object.fromEntries(searchParams)?.kind;
    key = Object.fromEntries(searchParams)?.type;
  }
  const convertItemSidebar = (): any["items"] => {
    const itemsTmp: any["items"] = [];
    category.forEach((item: any) => {
      if (item.subcategoryList) {
        const tmpGrandChidren: any["items"] = [];
        item.subcategoryList.forEach((item: any) => {
          tmpGrandChidren.push(getItem(item.name, item.id));
        });
        itemsTmp.push(getItem(item.name, item.id, null, tmpGrandChidren));
      } else {
        itemsTmp.push(getItem(item.name, item.id));
      }
    });
    const itemsTmpNew = itemsTmp.map((it: any) => {
      return {
        ...it,
        key: it.key + 0.1,
      };
    });
    return itemsTmpNew;
  };
  const onClick: any["onClick"] = (e: any) => {
    router.push(
      `/?kind=${Math.round(e?.keyPath[1] as any)}&type=${e.keyPath[0]}`
    );

    const pathOnClicked = e.keyPath.reverse();
    const tmp: any[] = [];
    if (convertItemSidebar()) {
      // eslint-disable-next-line array-callback-return
      convertItemSidebar().map((item: any) => {
        if (item.key.toString() === pathOnClicked[0]) {
          tmp.push(item.label);
          // eslint-disable-next-line array-callback-return
          item.children.map((item: any, index: number): void => {
            if (item.key.toString() === pathOnClicked[1]) {
              tmp.push(item.label);
            }
          });
        }
      });
    }
    dispatch(categorys(tmp));
  };
  useEffect(() => {
    ApiBook.getCategory().then((res) => {
      setCategory(res);
    });
  }, []);

  return (
    <div className="sidebar-container">
      <div style={{width: "270px"}} />
      <div className="menu">
        <div style={{display: "flex"}}>
          <BlockOutlined style={{fontSize: 22, color: "red", marginRight: 5}} />
          <h3>Danh mục sản phẩm</h3>
        </div>
        {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
        <div
          className="post-all"
          onClick={() => {
            router.push("/");
          }}
        >
          Tất cả bài đăng
        </div>
        <Menu
          onClick={onClick}
          style={{width: 256}}
          mode="inline"
          defaultSelectedKeys={[key as any]}
          defaultOpenKeys={[((sub as any) * 1 + 0.1).toString() as any]}
          items={convertItemSidebar()}
        />
      </div>
    </div>
  );
}
