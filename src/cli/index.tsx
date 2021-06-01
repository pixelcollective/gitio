#!/usr/bin/env node

import React from "react";
import { render } from "ink";
import { Shortener } from "./Shortener";
import { isEqual } from "lodash";

const init: State = {
  requests: [],
  format: "string",
};

const args = process.argv.splice(2);

const props: State = args.reduce((props, arg) => {
  return isEqual(arg, "--json")
    ? { ...props, format: "json" }
    : { requests: [...props.requests, arg], format: props.format };
}, init);

render(<Shortener {...props} />);
