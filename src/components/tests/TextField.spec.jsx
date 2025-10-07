import { screen } from '@testing-library/react';
import React from 'react';

import TextField from '@/components/TextField';
import render from '@/utils/test/render';

beforeEach(() => {
  console.log('root - beforeEach');
});
beforeAll(() => {
  console.log('root - beforeAll');
});
afterEach(() => {
  console.log('root - afterEach');
});
afterAll(() => {
  console.log('root - afterAll');
});

it('className prop으로 설정한 css class가 적용된다.', async () => {
  // Arrange
  // - className을 지닌 컴포넌트 랜더링
  await render(<TextField className={`my-class`} />);
  const textInput = screen.getByPlaceholderText('텍스트를 입력해 주세요.');

  // screen.debug();

  // Act
  // - 클릭이나 메소드 호출, prop 변경 등등에 대한 작업
  // Assert
  // - 렌더링 후 DOM에 해당 class가 존재하는지 검증
  expect(textInput).toHaveClass('my-class');
});

describe('placeholder', () => {
  beforeEach(() => {
    console.log('placeholder - beforeEach');
  });

  it("기본 Placeholder '텍스트를 입력해 주세요.'가 노출된다.", async () => {
    await render(<TextField />);

    const textInput = screen.getByPlaceholderText('텍스트를 입력해 주세요.');

    // screen.debug();

    expect(textInput).toBeInTheDocument();
  });

  it('Placeholder prop에 따라 placeholder가 변경된다.', async () => {
    await render(<TextField placeholder={'상품명을 입력해 주세요.'} />);

    const textInput = screen.getByPlaceholderText('상품명을 입력해 주세요.');

    // screen.debug();

    expect(textInput).toBeInTheDocument();
  });
});
