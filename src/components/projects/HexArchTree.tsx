import { TreeView, createTreeCollection } from "@chakra-ui/react";
import { LuFile, LuFolder } from "react-icons/lu";

export default function HexArchTree() {
  interface Node {
    id: string;
    name: string;
    children?: Node[];
  }

  const collection = createTreeCollection<Node>({
    nodeToValue: (node) => node.id,
    nodeToString: (node) => node.name,
    rootNode: {
      id: "ROOT",
      name: "",
      children: [
        {
          id: "adapters",
          name: "adapters",
          children: [
            {
              id: "adapters/inbound",
              name: "inbound",
              children: [
                { id: "adapters/inbound/index.ts", name: "index.ts" },
                {
                  id: "adapters/inbound/search-api-adapter.ts",
                  name: "search-api-adapter.ts",
                },
              ],
            },
            {
              id: "adapters/mappers",
              name: "mappers",
              children: [
                { id: "adapters/mappers/index.ts", name: "index.ts" },
                {
                  id: "adapters/mappers/api-to-domain-mapper.ts",
                  name: "api-to-domain-mapper.ts",
                },
              ],
            },
            {
              id: "adapters/outbound",
              name: "outbound",
              children: [
                { id: "adapters/outbound/index.ts", name: "index.ts" },
                {
                  id: "adapters/outbound/fetch-api-adapter.ts",
                  name: "fetch-api-adapter.ts",
                },
              ],
            },
          ],
        },
        {
          id: "app",
          name: "app",
          children: [
            { id: "app/composition-root.ts", name: "composition-root.ts" },
            { id: "app/config.ts", name: "config.ts" },
            { id: "app/content-api.ts", name: "content-api.ts" },
          ],
        },
        {
          id: "domain",
          name: "domain",
          children: [
            {
              id: "domain/entities",
              name: "entities",
              children: [
                { id: "domain/entities/common.ts", name: "common.ts" },
                { id: "domain/entities/index.ts", name: "index.ts" },
                { id: "domain/entities/movie.ts", name: "movie.ts" },
                {
                  id: "domain/entities/search-query.ts",
                  name: "search-query.ts",
                },
                {
                  id: "domain/entities/search-response.ts",
                  name: "search-response.ts",
                },
                { id: "domain/entities/series.ts", name: "series.ts" },
              ],
            },
            {
              id: "domain/schemas",
              name: "schemas",
              children: [
                { id: "domain/schemas/api-common.ts", name: "api-common.ts" },
                { id: "domain/schemas/api-movie.ts", name: "api-movie.ts" },
                {
                  id: "domain/schemas/api-search-response.ts",
                  name: "api-search-response.ts",
                },
                {
                  id: "domain/schemas/api-series.ts",
                  name: "api-series.ts",
                },
                { id: "domain/schemas/index.ts", name: "index.ts" },
              ],
            },
          ],
        },
        {
          id: "ports",
          name: "ports",
          children: [
            {
              id: "ports/inbound",
              name: "inbound",
              children: [
                { id: "ports/inbound/index.ts", name: "index.ts" },
                {
                  id: "ports/inbound/search-api-port.ts",
                  name: "search-api-port.ts",
                },
              ],
            },
            {
              id: "ports/outbound",
              name: "outbound",
              children: [
                {
                  id: "ports/outbound/fetch-api-port.ts",
                  name: "fetch-api-port.ts",
                },
                { id: "ports/outbound/index.ts", name: "index.ts" },
              ],
            },
          ],
        },
      ],
    },
  });

  return (
    <>
      <TreeView.Root collection={collection} maxW="sm" mt="2" mb="4" pl="8">
        <TreeView.Label>contentApi</TreeView.Label>
        <TreeView.Tree>
          <TreeView.Node
            indentGuide={<TreeView.BranchIndentGuide />}
            render={({ node, nodeState }) =>
              nodeState.isBranch ? (
                <TreeView.BranchControl>
                  <LuFolder />
                  <TreeView.BranchText>{node.name}</TreeView.BranchText>
                </TreeView.BranchControl>
              ) : (
                <TreeView.Item>
                  <LuFile />
                  <TreeView.ItemText>{node.name}</TreeView.ItemText>
                </TreeView.Item>
              )
            }
          />
        </TreeView.Tree>
      </TreeView.Root>
    </>
  );
}
