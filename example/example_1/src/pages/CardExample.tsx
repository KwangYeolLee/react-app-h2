import * as D from "../data";

export default function CardExample() {
  return (
    <div className="border rounded-lg p-4 shadow-lg w-64">
      <img
        src={D.randomImage(300, 200)}
        alt="샘플 이미지"
        className="rounded"
      />
      <h2 className="text-lg font-bold mt-2">상품명</h2>
      <p className="text-gray-600">간단한 상품 설명</p>
      <button className="btn btn-primary mt-2 w-full">구매하기</button>
    </div>
  );
}
