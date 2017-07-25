import React from 'react'
import { render } from 'react-dom'
import axios from 'axios';
import Qs from 'qs'
import {rootStart,rootSelect,rootError,rootLogin}  from './rootAction'

const headers = {
    'X-Requested-With': 'XMLHttpRequest'
  }
var myInit = { 
    method: 'GET',
    headers: headers,
    mode: 'cors',
    cache: 'default',
    credentials: 'include'
};

export function httpGET(actionType,url) {
      return dispatch => {
        return fetch('http://192.168.2.109/php/'+url)
                    .then(response => response.json())
                    .then(json => {
                        console.log("=======>返回数据:"+JSON.stringify(json))
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
        return fetch('http://api.xuexindev.com/dictionary-api/'+url)
                    .then(response => response.json())
                    .then(json => {
                        console.log("=======>返回数据:"+JSON.stringify(json))
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
        return fetch('http://api.xuexindev.com/itembank-api/'+url,myInit)
                    .then(function(response) {
                        let tmpJson = response.json();
                        if (response.status == 401) {
                            return tmpJson.then(json => {
                                //去登录
                                var loginUrl = json["loginUrl"];
                                console.log("=======>loginUrl = "+loginUrl)
                                return dispatch(rootLogin(loginUrl));
                            }
                            )
                        }else{
                            return tmpJson.then(json => {
                                console.log("=======>返回数据:"+JSON.stringify(json))
                                return dispatch(rootSelect(actionType,url,json));
                            })
                        }
                    })
                    .catch(
                        error =>{
                            //return dispatch(rootError(actionType,url,"网络错误"));
                        }
                    )
  }
}