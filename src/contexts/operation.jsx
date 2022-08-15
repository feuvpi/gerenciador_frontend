import React, { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';

// -- export AuthContext
export const OperationContext = createContext();