(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var togglePassword = document.querySelector('#togglePassword');
var password = document.querySelector('#password');
togglePassword.addEventListener('click', function (e) {
  // toggle the type attribute
  var type = password.getAttribute('type') === 'password' ? 'text' : 'password';
  password.setAttribute('type', type); // toggle the eye slash icon

  this.classList.toggle('fa-eye-slash');
});

},{}]},{},[1])

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJwcm9qZWN0cy90ei9zcmMvanMvYXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQSxJQUFNLGNBQWMsR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixpQkFBdkIsQ0FBdkI7QUFDQSxJQUFNLFFBQVEsR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixXQUF2QixDQUFqQjtBQUVBLGNBQWMsQ0FBQyxnQkFBZixDQUFnQyxPQUFoQyxFQUF5QyxVQUFVLENBQVYsRUFBYTtBQUNwRDtBQUNBLE1BQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxZQUFULENBQXNCLE1BQXRCLE1BQWtDLFVBQWxDLEdBQStDLE1BQS9DLEdBQXdELFVBQXJFO0FBQ0EsRUFBQSxRQUFRLENBQUMsWUFBVCxDQUFzQixNQUF0QixFQUE4QixJQUE5QixFQUhvRCxDQUlwRDs7QUFDQSxPQUFLLFNBQUwsQ0FBZSxNQUFmLENBQXNCLGNBQXRCO0FBQ0QsQ0FORCIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiY29uc3QgdG9nZ2xlUGFzc3dvcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9nZ2xlUGFzc3dvcmQnKTtcclxuY29uc3QgcGFzc3dvcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGFzc3dvcmQnKTtcclxuXHJcbnRvZ2dsZVBhc3N3b3JkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuICAvLyB0b2dnbGUgdGhlIHR5cGUgYXR0cmlidXRlXHJcbiAgY29uc3QgdHlwZSA9IHBhc3N3b3JkLmdldEF0dHJpYnV0ZSgndHlwZScpID09PSAncGFzc3dvcmQnID8gJ3RleHQnIDogJ3Bhc3N3b3JkJztcclxuICBwYXNzd29yZC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCB0eXBlKTtcclxuICAvLyB0b2dnbGUgdGhlIGV5ZSBzbGFzaCBpY29uXHJcbiAgdGhpcy5jbGFzc0xpc3QudG9nZ2xlKCdmYS1leWUtc2xhc2gnKTtcclxufSk7XHJcblxyXG5cclxuIl0sInByZUV4aXN0aW5nQ29tbWVudCI6Ii8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkltNXZaR1ZmYlc5a2RXeGxjeTlpY205M2MyVnlMWEJoWTJzdlgzQnlaV3gxWkdVdWFuTWlMQ0p3Y205cVpXTjBjeTkwZWk5emNtTXZhbk12WVhCd0xtcHpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSkJRVUZCT3pzN1FVTkJRU3hKUVVGTkxHTkJRV01zUjBGQlJ5eFJRVUZSTEVOQlFVTXNZVUZCVkN4RFFVRjFRaXhwUWtGQmRrSXNRMEZCZGtJN1FVRkRRU3hKUVVGTkxGRkJRVkVzUjBGQlJ5eFJRVUZSTEVOQlFVTXNZVUZCVkN4RFFVRjFRaXhYUVVGMlFpeERRVUZxUWp0QlFVVkJMR05CUVdNc1EwRkJReXhuUWtGQlppeERRVUZuUXl4UFFVRm9ReXhGUVVGNVF5eFZRVUZWTEVOQlFWWXNSVUZCWVR0QlFVTndSRHRCUVVOQkxFMUJRVTBzU1VGQlNTeEhRVUZITEZGQlFWRXNRMEZCUXl4WlFVRlVMRU5CUVhOQ0xFMUJRWFJDTEUxQlFXdERMRlZCUVd4RExFZEJRU3RETEUxQlFTOURMRWRCUVhkRUxGVkJRWEpGTzBGQlEwRXNSVUZCUVN4UlFVRlJMRU5CUVVNc1dVRkJWQ3hEUVVGelFpeE5RVUYwUWl4RlFVRTRRaXhKUVVFNVFpeEZRVWh2UkN4RFFVbHdSRHM3UVVGRFFTeFBRVUZMTEZOQlFVd3NRMEZCWlN4TlFVRm1MRU5CUVhOQ0xHTkJRWFJDTzBGQlEwUXNRMEZPUkNJc0ltWnBiR1VpT2lKblpXNWxjbUYwWldRdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lLR1oxYm1OMGFXOXVLQ2w3Wm5WdVkzUnBiMjRnY2lobExHNHNkQ2w3Wm5WdVkzUnBiMjRnYnlocExHWXBlMmxtS0NGdVcybGRLWHRwWmlnaFpWdHBYU2w3ZG1GeUlHTTlYQ0ptZFc1amRHbHZibHdpUFQxMGVYQmxiMllnY21WeGRXbHlaU1ltY21WeGRXbHlaVHRwWmlnaFppWW1ZeWx5WlhSMWNtNGdZeWhwTENFd0tUdHBaaWgxS1hKbGRIVnliaUIxS0drc0lUQXBPM1poY2lCaFBXNWxkeUJGY25KdmNpaGNJa05oYm01dmRDQm1hVzVrSUcxdlpIVnNaU0FuWENJcmFTdGNJaWRjSWlrN2RHaHliM2NnWVM1amIyUmxQVndpVFU5RVZVeEZYMDVQVkY5R1QxVk9SRndpTEdGOWRtRnlJSEE5Ymx0cFhUMTdaWGh3YjNKMGN6cDdmWDA3WlZ0cFhWc3dYUzVqWVd4c0tIQXVaWGh3YjNKMGN5eG1kVzVqZEdsdmJpaHlLWHQyWVhJZ2JqMWxXMmxkV3pGZFczSmRPM0psZEhWeWJpQnZLRzU4ZkhJcGZTeHdMSEF1Wlhod2IzSjBjeXh5TEdVc2JpeDBLWDF5WlhSMWNtNGdibHRwWFM1bGVIQnZjblJ6ZldadmNpaDJZWElnZFQxY0ltWjFibU4wYVc5dVhDSTlQWFI1Y0dWdlppQnlaWEYxYVhKbEppWnlaWEYxYVhKbExHazlNRHRwUEhRdWJHVnVaM1JvTzJrckt5bHZLSFJiYVYwcE8zSmxkSFZ5YmlCdmZYSmxkSFZ5YmlCeWZTa29LU0lzSW1OdmJuTjBJSFJ2WjJkc1pWQmhjM04zYjNKa0lEMGdaRzlqZFcxbGJuUXVjWFZsY25sVFpXeGxZM1J2Y2lnbkkzUnZaMmRzWlZCaGMzTjNiM0prSnlrN1hISmNibU52Ym5OMElIQmhjM04zYjNKa0lEMGdaRzlqZFcxbGJuUXVjWFZsY25sVFpXeGxZM1J2Y2lnbkkzQmhjM04zYjNKa0p5azdYSEpjYmx4eVhHNTBiMmRuYkdWUVlYTnpkMjl5WkM1aFpHUkZkbVZ1ZEV4cGMzUmxibVZ5S0NkamJHbGpheWNzSUdaMWJtTjBhVzl1SUNobEtTQjdYSEpjYmlBZ0x5OGdkRzluWjJ4bElIUm9aU0IwZVhCbElHRjBkSEpwWW5WMFpWeHlYRzRnSUdOdmJuTjBJSFI1Y0dVZ1BTQndZWE56ZDI5eVpDNW5aWFJCZEhSeWFXSjFkR1VvSjNSNWNHVW5LU0E5UFQwZ0ozQmhjM04zYjNKa0p5QS9JQ2QwWlhoMEp5QTZJQ2R3WVhOemQyOXlaQ2M3WEhKY2JpQWdjR0Z6YzNkdmNtUXVjMlYwUVhSMGNtbGlkWFJsS0NkMGVYQmxKeXdnZEhsd1pTazdYSEpjYmlBZ0x5OGdkRzluWjJ4bElIUm9aU0JsZVdVZ2MyeGhjMmdnYVdOdmJseHlYRzRnSUhSb2FYTXVZMnhoYzNOTWFYTjBMblJ2WjJkc1pTZ25abUV0WlhsbExYTnNZWE5vSnlrN1hISmNibjBwTzF4eVhHNWNjbHh1WEhKY2JpSmRmUT09In0=
