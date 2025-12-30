"use client";

import { useEffect } from "react";

/*
`error.tsx` 檔案可用於為路由區段定義一個 UI 邊界。它作為未預期錯誤的「全部捕獲」機制，並允許您向使用者顯示一個備用 UI (fallback UI)。

`error.tsx` 需要是一個客戶端元件 (Client Component)。它接受兩個 props：
  - `error`: 這個物件是 JavaScript 原生 `Error` 物件的一個實例。
  - `reset`: 這是一個用來重設錯誤邊界的函數。執行時，該函數將嘗試重新渲染路由區段。
*/

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // 可選地將錯誤記錄到錯誤報告服務
    console.error(error);
  }, [error]);

  return (
    <main className="flex h-full flex-col items-center justify-center">
      <h2 className="text-center">Something went wrong!</h2>
      <button
        className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400"
        onClick={
          // 嘗試透過重新渲染發票路由來恢復
          () => reset()
        }
      >
        Try again
      </button>
    </main>
  );
}
