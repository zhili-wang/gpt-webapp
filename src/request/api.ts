// import {
// 	ChatsInfo,
//   ConsumeRecordInfo,
//   DrawRecord,
//   InvitationRecordInfo,
//   PersonaInfo,
//   PluginInfo,
//   ProductInfo,
//   RequesPrepay,
//   RequestChatOptions,
//   RequestImagesGenerations,
//   RequestLoginParams,
//   ResponseConfigData,
//   ResponseLoginData,
//   SigninInfo,
//   SubscriptionInfo,
//   TurnoverInfo,
//   UserInfo,
//   WithdrawalRecordInfo
// } from '@/types'
// import request from '.'
// import { formatTime } from '@/utils'
// import { TableData } from '@/types/admin'

import request from ".";
import { ChatsInfo, RequestChatOptions } from "../types";

// // 获取验证码
// export function getCode(params: { source: string }) {
//   return request.get('/api/send_sms', params)
// }

// // 登录
// export function postLogin(params: RequestLoginParams) {
//   return request.post<ResponseLoginData>('/api/login', params)
// }

// // 获取用户信息
// export function getUserInfo() {
//   return request.get<UserInfo>('/api/user/info')
// }

// 请求对话
export function postChatCompletions(
  params: RequestChatOptions,
  config?: {
    headers?: { [key: string]: any }
    options?: { [key: string]: any }
  }
) {
  return request.postStreams<Response>('/api/chat/completions', params, config)
}

export function postChatCompletion(
  params: {
    prompt: string,
    type?: string
  },
  config?: {
    headers?: { [key: string]: any }
    options?: { [key: string]: any }
  }
) {
  return request.postStreams<Response>('/api/chat/completion', params, config)
}

// 消息列表
export function getUserMessages(){
	return request.get<Array<ChatsInfo>>('/api/user/messages')
}

