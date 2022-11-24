import { createInstance } from '~/helpers/axios';
import { TToolsParams } from '~/types/model';

const axios = createInstance();

export const getTools = (params: TToolsParams) =>
  axios.get('/nosql/get_tools', { params });

export const getC2 = (toolName: string, params: TToolsParams) =>
  axios.get(`/nosql/get_c2/${toolName}`, { params });

export const getRelatedC2Files = (toolName: string, params: TToolsParams) =>
  axios.get(`/nosql/get_related_c2_files/${toolName}`, { params });

export const getByScroll = (scrollId: string) =>
  axios.get(`/nosql/get_by_scroll/${scrollId}`);

export const getToolDetails = (toolName: string, params: TToolsParams) =>
  axios.get(`/nosql/get_tool_details/${toolName}`);

export const Tools = { getTools, getC2, getRelatedC2Files };
