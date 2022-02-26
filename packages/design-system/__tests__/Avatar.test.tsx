import * as React from "react";
import { render, RenderResult, screen } from "@testing-library/react";
import { AvatarGroup, Avatar } from "..";

describe("Test Avatar", () => {
  it("should render as expected", () => {
    const view: RenderResult = render(
      <Avatar src="/founder.webp" fallback="M" alt="Mikkel" />
    );

    expect(view).toMatchSnapshot();
  });
});

describe("Test AvatarGroup", () => {
  it("should render as expected", () => {
    const view: RenderResult = render(
      <AvatarGroup>
        <Avatar src="/founder.webp" fallback="M" alt="avatar1" />
        <Avatar src="/founder.webp" fallback="M" alt="avatar2" />
      </AvatarGroup>
    );

    expect(view).toMatchSnapshot();
  });

  it("should be able to limit rendered Avatars", () => {
    render(
      <AvatarGroup data-testid="avatargroup" limit={1}>
        <Avatar
          src="/founder.webp"
          fallback="M"
          alt="avatar1"
          data-testid="avatar1"
        />
        <Avatar
          src="/founder.webp"
          fallback="M"
          alt="avatar2"
          data-testid="avatar2"
        />
      </AvatarGroup>
    );

    const avatarGroup: HTMLElement = screen.getByTestId("avatargroup");

    // Check first avatar is present
    const avatar1: HTMLElement | null = screen.queryByTestId("avatar1");
    expect(avatarGroup).toContainElement(avatar1);

    // Check second avatar is not rendered
    const avatar2: HTMLElement | null = screen.queryByTestId("avatar2");
    expect(avatarGroup).not.toContainElement(avatar2);

    // Check number of hidden elements due to limit is present
    const limit: HTMLElement = screen.getByText("+1");
    expect(avatarGroup).toContainElement(limit);
  });

  it("should be able to display arbitrary number with AvatarGroup", () => {
    render(
      <AvatarGroup data-testid="avatargroup" num={152}>
        <Avatar
          src="/founder.webp"
          fallback="M"
          alt="avatar1"
          data-testid="avatar1"
        />
        <Avatar
          src="/founder.webp"
          fallback="M"
          alt="avatar2"
          data-testid="avatar2"
        />
      </AvatarGroup>
    );

    const avatarGroup: HTMLElement = screen.getByTestId("avatargroup");

    const avatar1: HTMLElement | null = screen.queryByTestId("avatar1");
    expect(avatarGroup).toContainElement(avatar1);

    const avatar2: HTMLElement | null = screen.queryByTestId("avatar2");
    expect(avatarGroup).toContainElement(avatar2);

    // Check arbitrary number is present
    const num: HTMLElement = screen.getByText("+152");
    expect(avatarGroup).toContainElement(num);
  });

  it("should support limit and num at the same time", () => {
    render(
      <AvatarGroup data-testid="avatargroup" limit={1} num={152}>
        <Avatar
          src="/founder.webp"
          fallback="M"
          alt="avatar1"
          data-testid="avatar1"
        />
        <Avatar
          src="/founder.webp"
          fallback="M"
          alt="avatar2"
          data-testid="avatar2"
        />
      </AvatarGroup>
    );

    const avatarGroup: HTMLElement = screen.getByTestId("avatargroup");

    // Check first avatar is present
    const avatar1: HTMLElement | null = screen.queryByTestId("avatar1");
    expect(avatarGroup).toContainElement(avatar1);

    // Check second avatar is not rendered
    const avatar2: HTMLElement | null = screen.queryByTestId("avatar2");
    expect(avatarGroup).not.toContainElement(avatar2);

    // Check arbitrary number is present and not limit (+1)
    const num: HTMLElement = screen.getByText("+152");
    expect(avatarGroup).toContainElement(num);
  });
});
