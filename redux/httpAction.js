import React from 'react'
import { render } from 'react-dom'
import axios from 'axios';
import Qs from 'qs'
import {rootStart,rootSelect,rootError}  from './rootAction'

export function httpGET(actionType,url) {
      return dispatch => {
        return fetch('http://192.168.2.109/php/'+url)
                    .then(response => response.json())
                    .then(json => {
                        console.log("=======>返回数据:"+json)
                        return dispatch(rootSelect(actionType,url,json));
                    })
                    .catch(
                        error =>{
                            console.log("=======>返回错误数据:"+error)
                            return dispatch(rootError(actionType,url,"网络错误"));
                        }
                    )
  }
}
export function httpPOST(actionType,url) {
      return dispatch => {
        return fetch('http://192.168.2.109/php/'+url)
                    .then(response => response.json())
                    .then(json => {
                        console.log("=======>返回数据:"+json)
                        return dispatch(rootSelect(actionType,url,json));
                    })
                    .catch(
                        error =>{
                            console.log("=======>返回错误数据:"+error)
                            return dispatch(rootError(actionType,url,"网络错误"));
                        }
                    )
  }
}
export function dictionaryGET(actionType,url) {
      return dispatch => {
        return fetch('http://api.xuexindev.com/dictionary-api/'+url,{credentials: 'include'})
                    .then(response => response.json())
                    .then(json => {
                        console.log("=======>返回数据:"+json)
                        return dispatch(rootSelect(actionType,url,json));
                    })
                    .catch(
                        error =>{
                            console.log("=======>返回错误数据:"+error)
                            return dispatch(rootError(actionType,url,"网络错误"));
                        }
                    )
  }
}
export function itembankGET(actionType,url) {
      return dispatch => {
        return fetch('http://api.xuexindev.com/itembank-api/'+url,{credentials: 'include'})
                    .then(response => response.json())
                    .then(json => {
                        console.log("=======>返回数据:"+json)
                        return dispatch(rootSelect(actionType,url,json));
                    })
                    .catch(
                        error =>{
                            console.log("=======>返回错误数据:"+error)
                            return dispatch(rootError(actionType,url,"网络错误"));
                        }
                    )
  }
}