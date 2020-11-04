import React, { useEffect, useState } from "react";
import { Text, Box, render, Newline } from "ink";
import Spinner from "ink-spinner";
import axios from "axios";

const Shortener = ({ request }: { request: Array<string> }) => {
  const [shorts, setShorts] = useState<Array<{ req: string; res: string }>>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    request?.map(async (req, i) => {
      const url = encodeURIComponent(req);

      try {
        const res: { data: string } = await axios({
          url: `https://git.io/create`,
          data: `url=${url}`,
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Content-Length": url.length,
          },
        });

        shorts[i] = { req, res: `https://git.io/${res.data}` };

        setShorts([...shorts]);
      } catch (error) {
        setError(error);
      }
    });
  }, [request]);

  return (
    <Box flexDirection="column">
      {error && (
        <>
          <Newline />
          <Text color="red">{error}</Text>
        </>
      )}

      {shorts
        ?.filter((short) => short)
        .map(({ req, res }, id) => (
          <Box marginTop={1} key={id}>
            <Text color="white">
              {req.replace("https://github.com/", "")}
              {"   "}
              <Text color="green">{res}</Text>
            </Text>
          </Box>
        ))}
    </Box>
  );
};

export default render(<Shortener request={process.argv.splice(2)} />);
