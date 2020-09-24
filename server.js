import React, { Component } from "react";
const apiAddItem = "http://localhost:5000/product/add";

async function insertNewItem(params) {
  try {
    let response = await fetch(apiAddItem, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
        body: JSON.stringify(params),
      },
    });
    let responseJson = await response.json();
    return responseJson.result;
  } catch (err) {
    console.error(`ERROR: ${err}`);
  }
}
export { insertNewItem };
