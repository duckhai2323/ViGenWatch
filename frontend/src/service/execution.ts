import axios, { ResponseType } from './axios';
/* eslint-disable @typescript-eslint/no-explicit-any */
export const getListExecutions = async (data: number): Promise<ResponseType> => {
  try {
    const response = await axios.get(`/api/execution/list-executions/${data}`);
    return {
      data: response.data,
      status: response.status,
      message: response.statusText || 'Success'
    };
  } catch (error: any) {
    return {
      data: null,
      status: error.response?.status || 500,
      message: error.message || 'An error occurred'
    };
  }
};

export const getResultJson = async (data: number) => {
  try {
    const response = await fetch(`http://localhost:5050/api/execution/output-json/${data}`, {
      method: 'GET'
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const reader = response.body?.getReader();
    if (!reader) {
      throw new Error('Failed to get reader from response body');
    }

    const decoder = new TextDecoder('utf-8');
    let result = '';

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      result += decoder.decode(value, { stream: true });
    }

    const json = JSON.parse(result);
    return json;
  } catch (error) {
    console.error('Error fetching or processing JSON:', error);
    throw error;
  }
};