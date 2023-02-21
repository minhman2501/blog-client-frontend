import axios from 'axios'
import { axiosConfigs } from './configs'

const axioClient = axios.create(axiosConfigs)

export default axioClient
