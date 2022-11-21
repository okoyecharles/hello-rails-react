import { createAsyncThunk } from "@reduxjs/toolkit";
import { GET_RANDOM_GREETING } from '../actionTypes';
import axios from 'axios';

export const getRandomGreeting = createAsyncThunk(
  GET_RANDOM_GREETING,
  async () => {
    const { data } = await axios.get('/api/v1/random_greetings');
    return data;
  }
);
