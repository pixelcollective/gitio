import React from "react";
import { Newline, Text, Box } from "ink";
import { useGitioUrls } from "../useGitioUrls";
import { isEqual } from "lodash";

const Shortener = ({ requests, format }: State) => {
  const [urls, err] = useGitioUrls(requests);

  const colWidth = urls.reduce((width, url) => {
    return url.full.length > width ? url.full.length : width;
  }, 1);

  return (
    <Box flexDirection="column" marginY={1}>
      {err && (
        <>
          <Newline />
          <Text color="red">{err}</Text>
        </>
      )}

      {isEqual(format, "string") ? (
        urls?.map(({ short, full }, id) => (
          <Box key={id} flexDirection="row">
            <Box width={colWidth}>
              <Text color="white">
                {full.replace("https://github.com/", "🔗  ")}
              </Text>
            </Box>
            <Box>
              <Text color="green">{short}</Text>
            </Box>
          </Box>
        ))
      ) : (
        <Box marginTop={1}>
          <Text color="white">{JSON.stringify(urls)}</Text>
        </Box>
      )}
    </Box>
  );
};

export { Shortener };
